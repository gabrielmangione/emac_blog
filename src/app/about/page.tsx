import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-5xl font-bold">
        About
      </h1>

      <Image
        src="/evilman_logo.png"
        alt="Evilman & Company Logo"
        width={250}
        height={250}
        className="rounded-2xl"
      />

      <p className="text-lg text-zinc-300 leading-relaxed">
        Evil Man & Company es orgullosamente una perversa corporación dedicada a la explotación 
        de todas las facetas del humano. En cualquier lugar donde haya un nicho, esta corporación
        está dispuesta a explotarlo, alimentadose de las costillas del mundo en su intento de
        llegar cada día mas lejos. Está en donde mires y en donde no, colonizando cada espacio disponible
        como el virus asintomatico de un sistema en descomposición. 
      </p>

      <p className="text-lg text-zinc-300 leading-relaxed">
        El vocero de este diablo, es un simple asalariado de nombre Evaristo, maltratado y sometido
        como todos a lo que dicte la corporación. Es un ser que día a día se debate las implicancias
        morales de sus acciones, habita conflictuado entre el deseo de ser bueno y la necesidad de 
        ganarse el pan. Performa una sonrisa falsa para ocultar el cansacio y el vacio que lo invade
        al recordar que su vida es reducida a ser un engranaje de está maquina insaciable. Evaristo 
        se refugia en el arte, para mirar de lejos el mundo y a si mismo, para entender que le pasa
        y que le esta pasando al mundo. Pero debido al contrato que tiene con la corporación, todo lo 
        que produce ya no le pertenece y será explotado por la EvilMan sin que el vea un centavo.   
      </p>

      <p className="text-lg text-zinc-300 leading-relaxed">
        Este humilde narrador desconoce a ciencia cierta que es lo que pasará en esta historia, 
        pero invita a los lectores a acompañarlo en este viaje explorativo de los rincones de esta pobre
        alma atrapada en el sistema.  
      </p>

      <p className="text-lg text-zinc-300 leading-relaxed
          bg-zinc-900/50
          border border-zinc-800
          rounded-2xl
          p-6
          shadow-sm">
        Evaristo es un refugio que encontré jugando en teatro, una voz distinta a la mia, 
        una perfo que abrazo para habitar el arte y la reflexión. Es un poco lo que soy 
        sin esa expectativa de ser algo. Es un ente que rescata esas fascetas que voy dejando 
        de lado a medida que la vida no me para de pedir ser productivo, cuerdo y racional. 
        Vive un poco en los tiempos muertos, en los silencios incomodos, en las palidas y quiebres.
        Tal vez sea mi versión mas real, una piel que visto cuando me expongo, cuando dejo de ser 
        eso que el sistema y mi cabeza no me dejan de imponer. Es un proceso de descubrimiento
        del que esto es una parte.
      </p>
    </section>
  );
}