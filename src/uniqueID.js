const generatedIDs = new Set();

function generateUniqueID() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000000);
    } while (generatedIDs.has(id));
    generatedIDs.add(id);
    return id;
}

export { generateUniqueID };