import Image from "next/image";

export default function GlowBotContent() {
  return (
    <div className="">
      <Image
        className="dark:invert mb-12"
        src="male_face_2_wob.png"
        alt="Next.js logo"
        width={160}
        height={38}
        priority
      />

      <div className="content">
        <h4 className="title text-xl lg:text-5xl mb-4">Prueba el nuevo GlowBot.</h4>
        <span className="text-lg">Estas son algunas cosas con las que puede ayudarte GlowBot</span>
        <ol className="list-disc pl-6 text-lg">
          <li>Conocer los producto disponibles.</li>
          <li>Conocer algunos problemas de la piel.</li>
          <li>
            Ayudar si deseas saber que producto podemos ofrecerte para tratar tu
            piel.
          </li>
        </ol>
      </div>
    </div>
  );
}
