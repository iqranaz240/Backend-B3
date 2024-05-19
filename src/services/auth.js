const auth = (data) => {
    if(data.password === '1234') {
        return true;
    } else {
        return false;
    }
}

module.exports = {auth}