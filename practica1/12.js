// 12.- Proporcione un ejemplo concreto donde el anidamiento el callbacks se puede reescribir mejor con async/await haciendo el codigo mas limpio y mantenible

// Convertimos a promesas
function getUserAsync(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (id <= 0) return reject(new Error('Usuario no encontrado'));
        resolve({ id, name: 'Ana' });
        }, 100);
    });
}

function getPostsAsync(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (!userId) return reject(new Error('No hay usuario'));
        resolve([
            { id: 101, title: 'Post 1' },
            { id: 102, title: 'Post 2' }
        ]);
        }, 120);
    });
}

function getCommentsAsync(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (!postId) return reject(new Error('Post inválido'));
        resolve([
            { id: 1001, text: 'Comentario A' },
            { id: 1002, text: 'Comentario B' }
        ]);
        }, 90);
    });
}

// Versión con async/await
async function fetchUserData(userId) {
    try {
        const user = await getUserAsync(userId);
        const posts = await getPostsAsync(user.id);
        const firstPost = posts[0];
        const comments = await getCommentsAsync(firstPost.id);

        return { user, posts, comments };
    } catch (err) {
        throw err;
    }
}

// Ejecución
fetchUserData(1)
    .then(({ user, posts, comments }) => {
        console.log('Usuario:', user);
        console.log('Posts:', posts);
        console.log('Comentarios del primer post:', comments);
    })
    .catch((err) => {
        console.error('Error durante la obtención de datos:', err);
    });
