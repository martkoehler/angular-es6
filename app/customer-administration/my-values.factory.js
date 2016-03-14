// values factory
myFactory.$inject = [];

export default function myFactory() {
    function hero() {
      return "Superhero";
    }
    return {
      hero: hero
    }
  }
