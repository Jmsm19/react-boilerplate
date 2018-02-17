const Aux = props => {
  console.log(...props.children);
  return { ...props.children };
};

export default Aux;
