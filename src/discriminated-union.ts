// Discriminated Unions
type AppleFruit = {
    color: string;
    size: 'small' | 'medium' | 'large';
}

type OrangeFruit = {
    isFruit: boolean;
    count: number;
}

function getFruit(fruit: AppleFruit | OrangeFruit): AppleFruit | OrangeFruit {
    if ("color" in fruit) {  
        // now typescript knows fruit is of the apple type  
        fruit.color = 'red';
    }
    return fruit;
}