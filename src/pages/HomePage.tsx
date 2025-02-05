import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="shadow-xl p-10 rounded-lg">
        <div>
          {' '}
          <p className="font-puritan text-lg">
            Bienvenidos a <span className="font-bold font-puritan text-lg">Las Recetas de la Nona!</span>
          </p>
          <p className="font-puritan text-lg">
            Un espacio donde el amor por la cocina y los recuerdos familiares se entrelazan. Cada receta aquí es un tesoro, una ventana al legado
            culinario de nuestras abuelas que, con sus manos y corazon alimentaron generaciones.
          </p>
          <p className="font-puritan text-lg">
            Por que cada receta tiene una historia y cada historia merece ser compartida. ¡Sumate a ser parte de esta tradición!
          </p>
        </div>

        <div className="flex justify-center">
          <img src="/abuela.png" alt="imagen princila de la nona" className="w-[350px] h-[350px] me-5" />
          <div className="flex flex-col justify-center">
            <p className="font-puritan italic text-lg">Porque cada receta tiene una historia,</p>{' '}
            <p className="font-puritan italic text-lg">y cada historia merece ser compartida.</p>{' '}
            <p className="font-puritan italic text-lg">¡Sumate a ser parte de esta tradición!</p>
            <Link
              key="/register"
              to="/register"
              className="w-3/4 px-12 py-2 mt-5 mx-auto text-celesteBoton shadow-xl bg-azulOscuro rounded-lg hover:bg-azulClaro hover:text-black focus:ring-4 focus:outline-none text-center"
            >
              ¡Registrate!
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 py-3 w-full h-[120px] justify-center bg-header-background">
        <img src="/macaron.svg" alt="imagen de macaron" />
        <img src="/Pan.svg" alt="imagen de pan" />
        <img src="/panqueque.svg" alt="imagen de panqueque" />
        <img src="/croissant.svg" alt="imagen de croissant" />
        <img src="/muffin.svg" alt="imagen de muffin" />
      </div>
      <div className="shadow-xl p-10 rounded-lg">
        <p className="font-puritan text-lg">¿Por qué hacemos esto?</p>
        <div className="h-5"></div>
        <p className="font-puritan text-lg">
          Nos inspira generar una colección de recetas: un puente entre generaciones. Este espacio está diseñado para preservar y compartir el legado
          culinario de nuestras abuelas, esas guardianas de sabores y recuerdos que nos han acompañado siempre.
        </p>
        <div className="h-5"></div>
        <p className="font-puritan text-lg">
          Te invitanmos a que cada receta que publiques lleve consigo una historia, un momento especial y una conexión única con tus raíces. Esta web
          te permite descubrir, organizar y compartir tus propias recetas familiares, enriqueciendo este legado colectivo.
        </p>
        <div className="h-5"></div>
        <p className="font-puritan text-lg">
          Aquí, cada uno puede ser parte de esta tradición, ya sea aprendiendo nuevas recetas o dejando un pedacito de su historia para que otros la
          disfruten. ¡Que sea un viaje de sabores, memorias y amor familiar!
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
