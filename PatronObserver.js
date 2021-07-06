//creamos la clase observable
class Observable {
  constructor() {
    //creamos el arreglo de nuestros observadores
    this.observers = [];
  }
  //creamos el metodo para subscribir a nuestros observadores
  subscribe(notifyingClass) {
    //usamos el metodo push para agregar nuestro elemento a nuestro arreglo de observadores
    this.observers.push(notifyingClass);
  }
  //creamos el metodo para subscribir a nuestros observadores
  unsubscribe(notifyingClass) {
    //usamos el metodo filter para crear un nuevo objeto con todos los elementos que cumplan la condicion
    this.observers = this.observers.filter(
      //la "condicion"
      (observer) => observer instanceof notifyingClass !== true
    );
  }
  //creamos el metodo de notificar para notificar a todos nuestros observadores
  notifyObsevable(noticia) {
    //para cada elemento de nuestro arreglo de observadores vamos a mandar la notificacion en este caso
    //yo la he llamado noticia para que fuera mas entendible
    this.observers.forEach((observer) => {
      observer.notify(noticia);
    });
  }
}
//creamos una clase que extiende de la clase observable
class NumberExample extends Observable {
  constructor() {
    //hacemos el componente super
    super();
    //creamos e inicializamos la variable value

    this.value = 0;
  }
  //hacemos el metodo para incrementar nuesto valor
  increment() {
    //incrementamos
    this.value++;
    //mandamos la notificacion
    this.notifyObsevable(this);
  }
}

//creamos una clase ejemplo
class NumberExampleSpanish {
  //creamos el metodo para notificar y le pasamos por parametro el objeto que vamos a mostrar
  notify(noticia) {
    console.log(`El nuevo numero es: ${noticia.value}`);
  }
}

//creamos otra clase ejemplo
class NumberExampleEnglish {
  notify(noticia) {
    //creamos el metodo para notificar y le pasamos por parametro el objeto que vamos a mostrar
    console.log(`The new number is: ${noticia.value}`);
  }
}

//creamos una instacia de nuestro objeto ejemplo
let numberExample = new NumberExample();

//subscribimos 2 elementos nuevos a nuestro ejemplo
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

//mandmos a incrementar para ver los resultados
numberExample.increment();

numberExample.increment();

numberExample.increment();

numberExample.increment();
