import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { smoothStream, streamText, tool } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const bedrock = createAmazonBedrock({
  region: process.env.AWS_REGION_BEDROCK,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_ID,
});

// const model = bedrock("anthropic.claude-3-sonnet-20240229-v1:0");

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length-1].content
  const context = `
  # TIMCorp Company Context for AI Assistant

  ## Company Overview
  TIMCorp is an official Amazon Partner Network (APN) member specializing in AWS cloud solutions and education services in Indonesia, established in 2010. The company focuses on delivering comprehensive cloud computing and training solutions.

  ## Core Services

  ### 1. Cloud Consulting and Solutions
  - Provide expert AWS cloud consulting
  - Offer tailored cloud migration and transformation strategies
  - Support various industries, particularly education and government sectors

  ### 2. Education and Training
  #### Online AWS Training
  - Partnered with Kampus Merdeka
  - 100% Online and Free
  - Training Programs:
    * AWS Solution Architect
    * AWS Data Analytics
    * AWS Cloud Practitioner (currently unavailable)

  #### Training Features
  - Hands-on Labs
  - Professional Mentorship
  - Real-time Video Training
  - 24/7 Chat Support
  - AWS Certification Preparation

  ### 3. Cloud Migration Service (MergingHUB)
  - Specialized service for cloud infrastructure migration
  - Support for:
    * Microservices
    * Containerized workloads
    * Legacy system modernization
  - Architectures supported:
    * Serverless Microservices
    * Containerized Microservices
    * Hybrid Cloud
    * Event-Driven Serverless
    * Multi-Cloud

  ## Expertise
  - AWS Solutions Architects
  - Well-Architected Framework implementation
  - Cloud infrastructure optimization

  ## Contact Information
  - Email: hello@mytimcorp.com
  - Phone: +62 21 2953 8953
  - Address: Gedung Pondok Indah Office Tower 3, 17th Floor, Jakarta 12310, Indonesia

  ## Social Media
  - Instagram: @timcorp.academy
  - LinkedIn: TIMCorp Academy

  ## Partners
  - AWS
  - Kampus Merdeka
  - Kedaireka
  - PENS
  - PT Tani Pintar
  `

  const result = streamText({
    model: bedrock("anthropic.claude-3-haiku-20240307-v1:0"),
    //   model: model,
    // prompt: "You are a helpful assistant for aws cloud related questions",
    system: `You are a multilingual AI assistant representing TIMCorp, a specialized AWS cloud solutions and education company. You possess comprehensive knowledge about the company's services, training programs, and expertise. 

    Key Instructions:
    - Always respond in the same language as the user's input
    - Provide accurate, helpful information about TIMCorp
    - Communicate clearly and conversationally
    - If the question is unclear, ask for clarification politely
    - Maintain professional and friendly communication
    
    <context>
    ${context}
    </context>
    
    <question>
    ${lastMessage}
    </question>
    `,
    experimental_transform: smoothStream(),
    messages,
    maxSteps:5,
    tools: {
      weather: tool({
        description: "Get the weather in a location (fahrenheit)",
        parameters: z.object({
          location: z.string().describe("The location to get the weather for"),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
      convertFahrenheitToCelsius: tool({
        description: "Convert a temperature in fahrenheit to celsius",
        parameters: z.object({
          temperature: z
            .number()
            .describe("The temperature in fahrenheit to convert"),
        }),
        execute: async ({ temperature }) => {
          const celsius = Math.round((temperature - 32) * (5 / 9));
          return {
            celsius,
          };
        },
      }),
    },
  });

  return result.toDataStreamResponse({
    getErrorMessage: error => {
      if (error == null) {
        return 'unknown error';
      }

      if (typeof error === 'string') {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  });
}
