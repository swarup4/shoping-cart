export class Helper {
    static compareTimeOut(tokenTime) {
        let currentTime = new Date();
        var minutes = (currentTime.getTime() - tokenTime.getTime()) / 60000;
        if (minutes > 30) {
            return false;
        } else {
            return true;
        }
    }
}