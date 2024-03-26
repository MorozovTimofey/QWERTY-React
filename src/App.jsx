function App() {
  return (
    <>
      <div className="site">
        <header>
          <div className="container list_one">
            <div className="brand">QWERTY</div>
            <h2>
              Ваш путь к <br />
              инновациям в мире <br />
              B2B-приложений
            </h2>
            <p>
              Мы — команда энтузиастов, которая не просто <br />
              разрабатывает приложения, а создаёт бешеные идеи,
              <br />
              переворачивающие мир IT-технологий. <br />
              <br />
              Если вы ищете надежного партнера для решения <br />
              сложных задач в B2B-сегменте, вы нашли его.
            </p>
            <a href="#list_two">
              <img src="./icon/arrow_downward.svg" alt="" />
              Обсудить проект
            </a>
          </div>
        </header>
        <main>
          <div className="list">
            <div className="container list_two" id="list_two">
              <div className="additional-element"></div>
              <div className="brand">QWERTY</div>
              <h2>Что нас отличает:</h2>
              <img src="./image/attention.png" alt="" className="attention" />
              <p>
                Мы не боимся экспериментировать и искать
                <br />
                нестандартные решения. Наша команда способна <br />
                превратить самые амбициозные идеи в реальность.
              </p>
              <a href="#list_three">
                <img src="./icon/arrow_downward.svg" alt="" />
                Далее
              </a>
            </div>
            <div className="container list_three" id="list_three">
              <div className="brand">QWERTY</div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "60px",
                }}
              >
                <h2>В чём мы лучшие:</h2>
                <div className="lang">
                  <div className="lang-item">
                    <img src="./icon/go.svg" alt="" />
                    GO
                  </div>
                  <div className="lang-item">
                    <img src="./icon/react.svg" alt="" />
                    REACT
                  </div>
                  <div className="lang-item">
                    <img src="./icon/csharp.svg" alt="" />
                    C#
                  </div>
                  <div className="lang-item">
                    <img src="./icon/php.svg" alt="" />
                    PHP
                  </div>
                  <div className="lang-item">
                    <img src="./icon/and.svg" alt="" />и др.
                  </div>
                </div>
                <p>
                  Мы владеем всеми лучшими технологиями из мира IT и <br />
                  можем разработать всё что угодно: от мобильных <br />
                  приложений до облачных решений. Ваша задача — наш <br />
                  вызов.
                </p>
              </div>

              <a href="#list_four">
                <img src="./icon/arrow_downward.svg" alt="" />
                Далее
              </a>
            </div>
            <div className="container list_four" id="list_four">
              <div className="brand">QWERTY</div>
              <h2>Наша формула:</h2>
              <div className="formula">UX+UI+USERS=💖</div>
              <p>
                Мы не просто создаём продукты, мы стремимся к тому,
                <br />
                чтобы пользователи были в восторге.
                <br />
                <br />
                Интуитивный интерфейс, высокая производительность <br />и
                безопасность — наша гарантия.
              </p>
              <a href="#list_five">
                <img src="./icon/arrow_downward.svg" alt="" />
                Далее
              </a>
            </div>
          </div>
        </main>
        <footer>
          <div className="container list_five" id="list_five">
            <div className="brand">QWERTY</div>
            <h2>Свяжитесь с нами:</h2>
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Введите Ваше имя..."
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Введите Ваш адрес эл. почты..."
              />
              <textarea
                name="comment"
                cols="40"
                rows="3"
                className="chat"
                placeholder="Введите Ваше сообщение..."
              ></textarea>
            </form>
            <button>
              <img src="./icon/arrow_ward.svg" alt="" />
              Отправить
            </button>
            <h4>
              (c) 2024, ТОО “QWERTY Z&N” <br />
              Республика Казахстан, г. Алматы
            </h4>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
