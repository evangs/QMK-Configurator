module.exports = (configKeymap, firmwareDirectory) => {
  return (
`#ifndef ${firmwareDirectory.toUpperCase()}_H
#define ${firmwareDirectory.toUpperCase()}_H
#include "quantum.h"

#define LAYOUT(${configKeymap.keys.join(', ')}) { \\
  ${configKeymap.positions.map((row) => `{ ${row.join(', ')} }`).join(`, \\
  `)} \\
}
#endif`);
};
