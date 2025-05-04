interface PizzaMenu {
    starter: string;
    pizza: string;
    beverage: string;
    dessert: string;
  }
  
  const simpleMenu: PizzaMenu = {
    starter: 'Salad',
    pizza: 'Pepperoni',
    beverage: 'Coke',
    dessert: 'Vanilla ice cream',
  };
  
  function adjustMenu(
    menu: PizzaMenu,
    menuEntry: keyof PizzaMenu,
    change: string,
  ) {
    menu[menuEntry] = change;
  }
  
  // 👍
  adjustMenu(simpleMenu, 'pizza', 'Hawaii');
  // 👍
  adjustMenu(simpleMenu, 'beverage', 'Beer');
  
  // 👎 Type - 'bevereger' is not assignable
  adjustMenu(simpleMenu, 'bevereger', 'Beer');
  // 👎 Wrong property - 'coffee' is not assignable
  adjustMenu(simpleMenu, 'coffee', 'Beer');



//================= Example 2 ==================
interface IMotorbikeData {
  engine: string,
  speed: number,
  price: number,
}
const MotorbikeData: IMotorbikeData = {
  engine: 'MJ',
  speed: 1000,
  price: 290000,
}

type IMotorbikeDataKey = keyof IMotorbikeData;

/**
 * The K extends the type of T, we have taken T to type of property
 * Which the type of key is being used as the property type
 */
const extractPropertyMotorbike = <T, K extends keyof T>(data: T, property: K) => {
  return data[property];
}

const moto = extractPropertyMotorbike<IMotorbikeData, IMotorbikeDataKey>(MotorbikeData, 'engine');

  