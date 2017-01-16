const app = "I don't do much."

var destructivelyAppendKitten = name => {
  kittens.push(name);
};

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
  kittens.pop(kittens.length-1);
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
};

var appendKitten = name => {
  return [...kittens, name];
};

var prependKitten = name => {
  return [name, ...kittens];
};

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
};

function removeFirstKitten() {
  return kittens.slice(1);
};
