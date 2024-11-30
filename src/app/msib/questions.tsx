import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
      question: "Apa itu Kampus Merdeka?",
      answer:
        "Kampus Merdeka adalah program resmi dari pemerintah, khusus untuk mahasiswa di Indonesia, untuk melakukan magang dan studi independen pada subjek yang anda inginkan, berguna mempersiapkan mahasiswa pada dunia kerja.",
    },
    {
      question: "Apa yang di ajarkan di program dari TIMCorp ini ?",
      answer:
        "Kami mengajarkan anda IT/non IT untuk memahami dunia cloud computing bersama AWS Cloud, yang tentunya akan sangat bermanfaat di banyak bidang dunia kerja.",
    },
    {
      question: "Kenapa saya harus memilih untuk belajar di TIMCorp ?",
      answer:
        "Karena kami adalah perusahaan partner resmi dari AWS, yang bisa anda handalkan, dan pastinya anda akan dimentor oleh trainer yang sudah tersertifikasi dan terpercaya.",
    },
    {
      question: "Apakah program ini bayar?",
      answer:
        "100% gratis, bagi mahasiswa yang masuk kriteria untuk ikut Kampus Merdeka.",
    },
    {
      question: "Apakah program ini dikerjakan remote / online ?",
      answer:
        "100% remote / online, anda bisa lakukan dimanapun anda berada.",
    },
  ];

const Questions = () => {
  

  return (
    <section className="my-10 p-2">
      <div className="container">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
          Frequently asked questions
        </h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-orange-400 hover:no-underline text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg pl-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Questions;
