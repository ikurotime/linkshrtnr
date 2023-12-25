export default function MainSelector() {
  return (
    <div className='flex flex-col text-2xl gap-6 border-rounded-md relative'>
      <form
        action=''
        className='border-2 border-foreground/10 rounded-md flex flex-col p-8 gap-5 bg-white dark:black'
      >
        <label htmlFor='link'>Enter a loooong link</label>
        <input
          name='link'
          type='text'
          placeholder='Example: https://yourwebsite.com/your/long/link'
          className='border border-foreground/10 rounded-md p-3 text-xl'
        />
        <span>Your new link will be:</span>
        <div>
          <span>linkshrtnrn.com/</span>
          <input
            name='path'
            type='text'
            placeholder='Example: new-link'
            className='border border-foreground/10 rounded-md p-3 text-xl'
          />
        </div>
        <button className='rounded-md px-2 py-2 bg-[rgb(234,198,67)] text-white'>
          Generate my link
        </button>
      </form>
    </div>
  )
}
