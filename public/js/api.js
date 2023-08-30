document.getElementById('createItemForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    const data = {
      name: name
    };

    try {
      const response = await fetch('/createItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const newItem = await response.json();
        console.log('New item created:', newItem);
      } else {
        console.error('Error creating item');
      }
    } catch (error) {
      console.error('Error creating item:', error);
    }
  });