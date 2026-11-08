export function CreatePost() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input type='text' name='create-title' id='create-title' />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input type='text' name='create-author' id='createauthor' />
      </div>
      <br />
      <textarea />
      <br />
      <br />
      <input type='submit' value='Create' />
    </form>
  )
}
