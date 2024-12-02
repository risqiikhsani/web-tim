import { H1, H2, H4, P } from "@/components/typography/Typography";
import Image from "next/image";

export default function WhyLearnAws() {
  return (
    <div className="flex flex-col gap-6 md:p-10 p-2 rounded-lg shadow-md border-2 border-slate-100">
      <H1 className="text-center mb-4">
        Kenapa Belajar AWS Cloud sebagai IT/non IT?
      </H1>

      <section>
        <H2 className="mb-2 text-primary">Kenapa Belajar Cloud Computing</H2>
        <H4 className="text-muted-foreground leading-relaxed">
          Belajar cloud computing penting bagi siapa saja, karena teknologi ini
          menjadi dasar dalam dunia kerja modern. Baik untuk meningkatkan
          produktivitas, mempermudah akses data, atau mendukung transformasi
          digital, cloud computing relevan untuk berbagai bidang pekerjaan,
          tidak hanya di dunia IT.
        </H4>
      </section>

      <section>
        <H2 className="mb-2 text-primary">Apa itu Cloud Provider?</H2>
        <H4 className="text-muted-foreground leading-relaxed">
          Cloud Provider adalah perusahaan atau layanan yang menyediakan
          infrastruktur, platform, dan perangkat lunak berbasis cloud untuk
          mendukung berbagai kebutuhan pengguna dalam cloud computing. Mereka
          bertanggung jawab atas pengelolaan sumber daya seperti server,
          penyimpanan, jaringan, dan aplikasi yang diakses melalui internet.
        </H4>
      </section>

      <section>
        <H2 className="mb-2 text-primary">Kenapa Memilih AWS Cloud?</H2>
        <H4 className="text-muted-foreground leading-relaxed">
          AWS (Amazon Web Services) sering dianggap lebih unggul dibandingkan
          penyedia cloud lainnya karena beberapa alasan:
        </H4>
        <ul className="list-disc list-inside pl-4 space-y-2 text-muted-foreground">
          <li>
            <strong>Kelengkapan Layanan:</strong> AWS menawarkan lebih dari 200
            fitur untuk komputasi, penyimpanan, AI/ML, analitik, dan lainnya.
          </li>
          <li>
            <strong>Jangkauan Global:</strong> Infrastruktur terbesar dengan
            data center yang tersebar di seluruh dunia, memberikan latensi
            rendah dan akses cepat.
          </li>
          <li>
            <strong>Skalabilitas dan Fleksibilitas:</strong> Memungkinkan
            pengguna untuk mengelola sumber daya sesuai kebutuhan, dari startup
            hingga perusahaan besar.
          </li>
          <li>
            <strong>Keamanan Tinggi:</strong> Mendapatkan sertifikasi
            internasional seperti ISO 27001 dan SOC, memastikan keamanan data
            pengguna.
          </li>
          <li>
            <strong>Ekosistem yang Kaya:</strong> Komunitas luas, dokumentasi
            lengkap, pelatihan, dan dukungan pelanggan mempermudah pengembangan.
          </li>
        </ul>
        <H4 className="text-muted-foreground leading-relaxed">
          Meskipun setiap cloud provider memiliki keunggulan unik, AWS menonjol
          dalam inovasi, keandalan, dan adopsi skala besar di berbagai industri.
        </H4>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Image
          width={1000}
          height={1000}
          alt="AWS Statistics"
          src="/images/awsstats.jpeg"
          className="rounded-lg shadow-md"
        />
        <Image
          width={1000}
          height={1000}
          alt="AWS Rankings"
          src="/images/awsrank.png"
          className="rounded-lg shadow-md"
        />
      </div>

      <section>
        <H2 className="mb-2 text-primary">
          Untuk Siapa Belajar Cloud Computing?
        </H2>
        <P className="leading-relaxed">
          Berikut adalah contoh berbagai jenis pekerjaan yang memiliki peluang lebih besar untuk mudah
          didapatkan jika memiliki skill cloud computing:
        </P>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-muted-foreground">
          <p>Cloud Solution Architect</p>
          <p>Cloud Engineer</p>
          <p>DevOps Engineer</p>
          <p>Cloud Security Specialist</p>
          <p>Site Reliability Engineer (SRE)</p>
          <p>Data Engineer</p>
          <p>Data Analyst</p>
          <p>Data Science</p>
          <p>Database Administrator (DBA)</p>
          <p>Machine Learning Engineer</p>
          <p>Full-Stack Developer (dengan integrasi cloud)</p>
          <p>IoT Developer</p>
          <p>Cloud Consultant</p>
          <p>IT Infrastructure Manager</p>
          <p>Systems Administrator (SysAdmin)</p>
          <p>Cloud Support Specialist</p>
          <p>Big Data Analyst</p>
          <p>Cloud Operations Manager</p>
          <p>Cloud Migration Specialist</p>
          <p>Cloud Storage Administrator</p>
          <p>Product Manager (Cloud Solutions)</p>
          <p>Cloud Sales Engineer</p>
          <p>Cloud Trainer atau Instructor</p>
          <p>Software Engineer (Cloud-Based Applications)</p>
          <p>Disaster Recovery Specialist</p>
          <p>Networking Specialist (Cloud Networking)</p>
          <p>AI/ML Specialist (Cloud Platform)</p>
        </div>
        <P className="mt-4">
          Dengan skill cloud computing, peluang kerja tidak terbatas pada dunia
          IT saja, tetapi juga mencakup bidang lain yang memanfaatkan teknologi
          modern untuk meningkatkan efisiensi dan inovasi.
        </P>
      </section>
    </div>
  );
}
