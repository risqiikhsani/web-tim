
import Google from "next-auth/providers/google"
import NextAuth from "next-auth"
// import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
// import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
// import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
 
// const config: DynamoDBClientConfig = {
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_ID!,
//   },
//   region: process.env.AUTH_DYNAMODB_REGION,
// }
 
// const client = DynamoDBDocument.from(new DynamoDB(config), {
//   marshallOptions: {
//     convertEmptyValues: true,
//     removeUndefinedValues: true,
//     convertClassInstanceToMap: true,
//   },
// })
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
//   adapter: DynamoDBAdapter(client),
})