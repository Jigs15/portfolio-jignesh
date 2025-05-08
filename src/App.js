function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans p-6">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-4xl font-bold">Jigneshkumar Patel 👋</h1>
        <h2 className="text-xl mt-2 text-indigo-600">
          Master's Student in Health Informatics | Former Pharmacist
        </h2>
        <p className="mt-4 max-w-xl">
          I am passionate about transforming healthcare through technology. With
          clinical pharmacy experience and a growing skill set in health
          informatics, I build and support data-driven solutions for improved
          patient outcomes.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/jigneshkumar-patel-54bab335b"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" className="text-blue-600 underline" download>
            Download Resume
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <ul className="space-y-4">
          <li className="border p-4 rounded shadow-sm">
            <h4 className="font-semibold">AI Risk Prediction Model</h4>
            <p>
              Developed a deep learning model to classify health-related risk
              using structured patient data. Improved accuracy using multiple
              hidden layer configurations.
            </p>
          </li>
          <li className="border p-4 rounded shadow-sm">
            <h4 className="font-semibold">
              MONAI: Diabetic Retinopathy Classification
            </h4>
            <p>
              Used MONAI and the Diabetic Retinopathy dataset to classify retina
              images. Applied transforms, trained a CNN model, and evaluated
              performance on validation data.
            </p>
          </li>
        </ul>
      </section>

      <footer className="pt-6 border-t text-sm text-gray-500">
        <p>© 2025 Jigneshkumar Patel · portfolio-jignesh.vercel.app</p>
      </footer>
    </main>
  );
}

export default App;
