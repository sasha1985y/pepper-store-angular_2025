# Контекст
## Вспоминаем, что такое React
React
  - библиотека для решения конкретной задачи — эффективный точечный ререндеринг

  - Data?
  - Fetch?
  - Save?
  - Data => DOM?
  - Routing?
  - [Auth...]

  - React Router + Redux Toolkit
  - Next.js
  - Expo => React Native

Философия React
  - реактивность — любое изменение в состоянии данных приводит к автоматическому и немедленному изменению состояния отображения (DOM)
  - однонаправленность потока данных
  - функциональное программирование (по стилю удобно для этих задач)

  /--- action ---\
[data]   ==>     DOM
state
  a = 1
  Reducer

```tsx

// Ideal component — pure component
// Function -> pure function
function StandardComponent(props) {
  // sideEffect
  return <></>;
}

(props) => VirtualDOM


function pureSum(a, b) {
  return a + b;
}
// Сколько раз мы вызовем чистую функцию, столько раз 
// мы и получим абсолютно идентичный результат

let a = 0;
let b = 0;

function notSoPureSum() {
  document;
  window;
  console;
  fetch();

  return a + b;
}

notSoPureSum();

function NotSoPureComponent() {
  const [isClosed, setIsClosed] = useState(Math.random() > 0.5);

  return <form>
    <button></button>
  </form>;
}

() => VirtualDOM
```

## Вспоминаем ООП
Объектно-ориентированное программирование

* Обычно можно встретить в интернете упоминание, что функциональное программирование и объектно-ориентированное программирование несовместимы. Это не так.

- Объектно-ориентированное программирование
- Объектно-ориентированное проектирование

ООП — это подход к программированию, когда каждая сущность языка описывается с помощью объека:
- У объекта есть методы (функции) и свойства (значения).
- Если появляется необходимость создать множество одинаковых объектов, используются классы
- Для передачи свойств одних классов другим используется механизм наследования
- Это становится возможно благодаря полиморфизму

```tsx
function Dialog() {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler(evt) {
    setIsOpen(false);
  }

  useEffect(function() {
    if (isOpen) {
      document.onkeypress = (evt) => {
        if (evt.key === "Escape") {
          setIsOpen(false);
        }
      }
    }

    return function() {
      document.onkeypress = null;
    }
  }, [isOpen]);

  return <dialog open={isOpen}>
    <Button onClick={clickHandler}>Click me</Button>
  </dialog>
}

// Functional DOM
function Button({ children, className, type }) {
  return <button className={className} type={type}>
    {children}
  </button>;
}

const myButton = Button({
  children: "Hello",
  className: "button-active",
  type: "submit",
});


// Object-Oriented DOM
// Button
class OOPButton {
  children: string = "",
  className: string = "",
  type: "submit" | "reset" | "button" = "button";

  constructor({children, className, type}) {
    this.children = "Hello";
    this.className = "button-active";
    this.type = "submit";
  }

  render() {
    return `<button type="${this.type}" class="${this.className}">${this.children}</button>`;
  }
}

const myOOPButton = new OOPButton({
  children: "Hello",
  className: "button-active",
  type: "submit",
});

myOOPButton.render();
```

Если мы работаем в функциональном стиле с DOM, то этот стиль лучше подходит для ситуаций, когда нужно по цепочке отрисовать несколько компонент, вложенных друг в друга. Для этого нужно чтобы компоненты были чистыми.

Однако, если логика работы компонент начинает сильно зависеть от их внутреннего состояния, то функциональный стиль перестает быть удобным из-за того, что приходится возиться с сайд-эффектами
