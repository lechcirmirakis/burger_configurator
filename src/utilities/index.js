export const throwBurgerItem = kind => {
  let item;

  switch (kind) {
    case "bread-bottom":
      item = <BreadBottom />;
      break;
    case "bread-top":
      item = (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      );
      break;
    case "meat":
      item = <Meat />;
      break;
    case "cheese":
      item = <Cheese />;
      break;
    case "salad":
      item = <Salad />;
      break;
    case "bacon":
      item = <Bacon />;
      break;
    default:
      item = null;
  }

  return item;
};
