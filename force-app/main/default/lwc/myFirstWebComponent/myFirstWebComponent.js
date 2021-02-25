//target： 基础练习，读取静态内容
//@track 练习，
//20 Spring Release之后，变量即使不加@track修饰符，也是reactive的（变了就会重新渲染）；
//但对于数组和对象，如果不加@track,部分改变不会出发重新渲染，

import { LightningElement, track } from 'lwc';
export default class HelloIteration extends LightningElement {
    @track  //此处如果没有@track，点击button后数据不会重新渲染，因为handleClick中只改变了部分数据值；
    contacts = [
                    {
                        Id: 1,
                        Name: 'Amy Taylor',
                        Title: 'VP of Engineering',
                    },
                    {
                        Id: 2,
                        Name: 'Michael Jones',
                        Title: 'VP of Sales',
                    },
                    {
                        Id: 3,
                        Name: 'Jennifer Wu',
                        Title: 'CEO',
                    },
                ];

    handleClick(event){
        this.contacts[0].Name = 'Nic HE';
    }

}