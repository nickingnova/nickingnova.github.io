var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman
{
  constructor(nombre, v, a)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre]
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br/><strong>" + this.nombre +"</strong><br/ >");
    document.write("Vida: " + this.vida + "<br/ >");
    document.write("Ataque: " + this.ataque + "<hr>");
  }
}
var coleccion = []
coleccion.push(new Pakiman("Cauchin", 80, 50));
coleccion.push(new Pakiman("Pokacho", 100, 30));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var p of  coleccion)
{
  p.mostrar();
}
