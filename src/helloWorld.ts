
function helloTypeScript (user: string) {
	const data = `Hello World !! ${ user }.`;
	return data;
}

let newPeople: string = 'Tom';

// console.log(helloTypeScript(newPeople));


let newValue: boolean = false;

let count: number = 100;

let printData: string = `Hello ${ newPeople }, Are you ${ count } years old.`;

console.log(printData);

let voidData: void = null;

let dataAny: any = 'data';

let dataShow: string | number;

dataShow = 'Tome';
dataShow = 1;


interface ReturnData {
	name: string;
	age: number;
	status: boolean;
	description?: string;
}

let datareturn: ReturnData = {
	name: 'Bob',
	age: 13,
	status: true,
	description: 'He is Bob'
}

let obkect: number[] = [1, 23, 12, 334, 21];

obkect.push(123);

function sumData() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

function sum(x: number, y: number): number {
	console.log(x + y);
	return x + y;
}

sum(1, 12);


let newFunction: (x: number, y: number) => number = function (x: number, y: number): number {
	return x + y;
}

interface FunctionInterface {
	(data1: string, data2: number): string;
}

let exportNewData: FunctionInterface;

exportNewData = function (data1: string, data2: number) {
	return `${data1}-${data2}`;
}


function buildAfunction(firstName: string, lastName?: string): boolean {
	if (lastName) {
		return true;
	} else {
		return false;
	}
}


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
