function BoardMember(name,homeState,training){
this.name=name;
this.homeState=homeState;
this.training=training

this.veto=function(){
    const message="No, I must disagree"
    return message
}
this.approve=function(){
    const messageApprove="You can do that!"
    return messageApprove
}
this.doCharity=function(){
    return "I like to help people."
}
this.releasePressStatement=function(){
    return "You will see great things from Scuber."
}

}
BoardMember.prototype.sayHi= function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}