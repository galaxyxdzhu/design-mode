import { executionAsyncResource } from "async_hooks";


/*
 * @Description: 命令模式
 * @Author: galaxyxd
 * @Date: 2022-02-21 19:24:43
 * @Reference:
 */


// Command 类： 抽象类，类中对需要执行的命令进行声明，一般来说要对外公布一个excute方法来执行命令

// ConcreteCommand类：Command类的实现类，对抽象类声明的方法进行实现
// Invoker类：调用者，负责调用命令
// Receiver类：接受者，负责接收命令并且执行命令


// 文档  执行类
class WordDocument {
    create() {
        console.log('create')
    }

    open() {
        console.log('open')
    }

    close() {
        console.log('close')
    }
}

// 文档命令类
class DocumentCommand {
    protected doc: WordDocument
    constructor(doc: WordDocument) {
        this.doc = doc
    }

    excute() {}
}

class closeCommand extends DocumentCommand {
    constructor(doc: WordDocument) {
        super(doc)
    }

    excute() {
        this.doc.close()
    }
}


class openCommand extends DocumentCommand {
    constructor(doc: WordDocument) {
        super(doc)
    }

    excute() {
        this.doc.open()
    }
}

class createCommand extends DocumentCommand {
    constructor(doc: WordDocument) {
        super(doc)
    }

    excute() {
        this.doc.create()
    }
}

