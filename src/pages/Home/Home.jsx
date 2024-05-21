export default function HomePage() {
  return (
    <div id="content-container">
      <article id="introduction">
        <h1>Hello, dear Learner!</h1>
        <p>
          This section should expose the main purpose behing the project and
          also links where the user should go to start learning new words.{" "}
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis.
        </p>
      </article>
      <section>
        <h2>
          Here we input the unknown words and call the API that returns the
          definitions. <br /> All that is being saved down below in the new
          words section and in our dictionary. <br /> From then on we should
          write sentences with the use of the word-definition pattern and save
          them in the sentences page.
        </h2>
      </section>
    </div>
  );
}
