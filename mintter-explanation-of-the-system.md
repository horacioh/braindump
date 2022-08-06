# Mintter explanation of the system

- en ipfs tienes un namespace de 256bits (practicamente infinito)
- en hypercore tienes un namespace del log? (preguntar a Burdi)
- mintter object
  - ID = Hash(permanode)
  - es un Graph con 3 tipos de valores: Nodes, Attributes (Edges) y values (node)
  - los Values pueden ser de diferentes tipos, y eso es lo que determina que tipo de relacion tienen los nodos:
    - si es un string, es un attributo
    - si es otro nodo, es un link
- IPLD es JSON que añade el concepto de link de otros IPLD
  - generalizacion de que se puede representar con datos
  - IPLD ~~ JSON
  - tienen kinds de info (Map, list, string...)
  - tienen un kind especial "link" que es un CID
- CID = base encoding (optional) + 1 (version) + Multicodec de datos + Multihash (hash function coder) + digest
  - es realmente un formato que nos define como podemos comparar el digest
  - lo que guardamos en la BBDD es el Multihash
  - usamos CBOR: es como JSON pero binario, mas compacto y ademas te deja trabajar con archivos binarios (con JSON no)
