
// This function no returning nothing
function nothingToReturnFunc(): void {
    alert(`It's not return anything in this function`)
}

// arrow function 
const func1 = function (i: number): number { return i * 2 };
const arrowFunc1 = (i: number): number => { return i * 2 };


//=============== Default type for function parameters ==================== //
// When you declare parameters of function like that that's meaning the type of default values of parameters also type of itself
function getCourse(title = 'TITLE', subTItle = 'TEST', lessonNum = 0) {
    // (parameter) title: string
    // (parameter) subTItle: string
    // (parameter) lessonNum: number
    console.log('title: ', title, ', subTItle: ', subTItle, ', lessonNum: ', lessonNum);
}

interface ICourse {
    title: string;
    subTitle: string;
    lessonNum: number;
}

//=============== Define type for function parameters ==================== //

function getCourseB({ title, subTitle, lessonNum }: ICourse): ICourse {
    console.log('title: ', title, ', subTitle: ', subTitle, ', lessonNum: ', lessonNum);
    return {
        title,
        subTitle,
        lessonNum
    }
}

//=============== Define type for callback function parameters ==================== //
type CourseCallbackFunc = (course: ICourse) => ICourse;
function getCourseCallback({ title, subTitle, lessonNum }: ICourse, callback: CourseCallbackFunc ): ICourse {
    console.log('title: ', title, ', subTitle: ', subTitle, ', lessonNum: ', lessonNum);

    const course = { title, subTitle, lessonNum };

    callback(course); 

    return course
}

//=============== Define custom function ==================== //
type getCourseCustomType = (title: string, subTitle: string, lessonNum: number) => ICourse;
// if we change the type of any parameters and then it notice the error
// when we change title is number it show the error like this
// Type '(title: number, subTitle: string, lessonNum: number) => { title: number; subTitle: string; lessonNum: number; }' is not assignable to type 'getCourseCustomType'.
//  Types of parameters 'title' and 'title' are incompatible.
//  Type 'string' is not assignable to type 'number'
const getCourseCustom: getCourseCustomType = (title: string, subTitle: string, lessonNum: number) => {
    console.log('title: ', title, ', subTitle: ', subTitle, ', lessonNum: ', lessonNum);

    const course = { title, subTitle, lessonNum };

    return course
}