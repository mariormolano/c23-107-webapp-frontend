import IngredientForm from "../features/Receta/IngredientForm";

import Layout from "../layouts/Layout";

const RecetaPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <IngredientForm />
      </div>
    </Layout>
  );
};

export default RecetaPage;
