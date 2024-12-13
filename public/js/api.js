const API_URL = '/api';

export async function createPaste(content) {
    const response = await fetch(`${API_URL}/pastes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create paste');
    }

    return response.json();
}