//creamos la clase observable
class Observable {

    constructor(){
    //creamos el arreglo de nuestros observadores
        this.observers = []

    }
    //creamos el metodo para subscribir a nuestros observadores
    subscribe(notifyingClass){
        //usamos el metodo push para agregar nuestro elemento a nuestro arreglo de observadores
        this.observers.push(notifyingClass)
    }
    //creamos el metodo para subscribir a nuestros observadores
    unsubscribe(notifyingClass){
        //usamos el metodo filter para crear un nuevo objeto con todos los elementos que cumplan la condicion
        this.observers = this.observers.filter(
            //la "condicion"
            (observer)=>observer !== notifyingClass)//<-------
    }
    //creamos el metodo de notificar para notificar a todos nuestros observadores
    notifyObsevable(noticia){
        //para cada elemento de nuestro arreglo de observadores vamos a mandar la notificacion en este caso
        //yo la he llamado noticia para que fuera mas entendible
        this.observers.forEach(observer=>{observer.notify(noticia)})
    }
}
//creamos una clase que extiende de la clase observable
class NumberExample extends Observable{
    constructor(){
        //hacemos el componente super
        super();
        //creamos e inicializamos la variable value

        this.value=0;
    }
  
    increment(){
        this.value++;
        this.notifyObsevable(this)
    }
  }


    class NumberExampleSpanish{
        notify(noticia){
    console.log(`El nuevo numero es: ${noticia.value}`);
            }
    }



     class NumberExampleEnglish{
        notify(noticia){
    console.log(`The new number is: ${noticia.value}`);
            }
    }

    let numberExample = new NumberExample();

    let n1 = new NumberExampleSpanish();

    numberExample.subscribe(n1)
        // numberExample.subscribe( new NumberExampleEnglish)

        
        numberExample.increment();
        
        numberExample.increment();

        numberExample.unsubscribe(n1)

        numberExample.increment();
        
        numberExample.increment();
        