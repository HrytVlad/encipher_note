import './Main.css';
function Main() {
    return (
      <div className = "main2">
        <div className = "main2_block1">
        <a href="/create">Создать note</a>
        <a href="/note">Просмотреть note</a>
        </div>
        <div className = "main2_block2">
          <p>
            Share Notes - сервис для обмена заметками. Создайте заметку, отправте ссылку на заметку и ваш друг сможет ее просмотреть. После просмотра заметка будет удалена.
          </p>
<div>
Как сделать заметку?
            <ul>
              <li>Пройдите по ссылке</li>
              <li>Вставте текст и нажмите Create</li>
              <li>Отправте сгенерированый адрес другу</li>
            </ul>
</div>
          <p>
            Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.
          </p>


        </div>
      </div>
    );
  }
  
  export default Main;