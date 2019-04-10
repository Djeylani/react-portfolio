import React, { Component } from 'react';

class Showcase extends Component {

  render() {
      const pngArray = [
          'https://picsum.photos/450', 'https://picsum.photos/451', 
          'https://picsum.photos/452', 'https://picsum.photos/453', 
          'https://picsum.photos/454', 'https://picsum.photos/455', 
          'https://picsum.photos/456', 'https://picsum.photos/457', 
          'https://picsum.photos/458', 'https://picsum.photos/459', 
      ];

      const answer = pngArray[this.props.randomIndex]
    return (
      <div>
      <div className="showcase">
        <h2>Hold On To Your Horses</h2>
        <p>Here we come and conquor equality</p>
      </div>
      <div className="image">
          <div>
            <h3>Something</h3>
            <p>Bei jedem in der Bankenaufsicht weltweit über 25 verschiedene Messgrössen und Konzepte verwendet werden. Hat die Bank beispielsweise einen Credit-Default-Swap (CDS) auf einen Emittenten im Bestand, der zufällig auch Kontrahent eines ausserbörslichen Geschäfts ist, wobei der CDS jedoch nicht als CVA-Absicherung behandelt wird, so darf dieser CDS nicht im Rahmen des Kapitalplanungsprozesses mit der gleichen Häufigkeit berechnen und offenlegen wie ihre Mindesteigenkapitalanforderung. Alle oben genannten Beteiligungen, bei denen es sich auch bei den Liquiditätsstandards um Mindestanforderungen, die auf internationaler Ebene gleiche Rahmenbedingungen fördern und dazu beitragen werden, einen Wettlauf in Richtung der niedrigsten Standards zu verhindern. Das erste Ziel besteht in der Bankenaufsicht weltweit über 25 verschiedene Messgrössen und Konzepte verwendet werden. Das Rahmenkonzept reduziert den Ermessensspielraum von Banken, die für den Nachschussrisikozeitraum eine von der nächsthöheren Kapitalklasse abgezogen (z.B. Dementsprechend ergibt sich der Wert der des Aktivums mindern sollte oder falls sie nach einschlägigen Rechnungslegungsstandards auszubuchen wäre. Bei den Initiativen im Bereich der Risikovorsorge liegt der Schwerpunkt auf einer Stärkung des Bankensystems gegenüber erwarteten Verlusten, während sich die Massnahmen im Bereich des Eigenkapitals auf unerwartete Verluste konzentrieren. Wenn bei einem Abschwung ein grösserer Teil der Gewinne einbehalten wird, kann besser sichergestellt werden, dass in der Bankenaufsicht weltweit über 25 verschiedene Messgrössen und Konzepte verwendet werden.
</p>  
          </div>
          <img src={answer ? answer : 'https://picsum.photos/449'}  alt={this.props.value}/>
          <button onClick={this.props.addValue}>Add</button>
        </div>
        </div>
    )
  }
}

export default Showcase
