export default {
    'move': {
        excute(receiver, pos) {
            receiver.move(pos)
        }
    },
    'add': {
        ele: '',
        excute(receiver, type, data) {
           ele =  receiver.add(type, data)
        },
        undo(receiver, type) {
            receiver.remove(type)
        }
    }
}