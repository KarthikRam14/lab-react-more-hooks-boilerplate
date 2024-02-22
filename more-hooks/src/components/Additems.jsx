import { ActionType } from '../App';

function Additems({post,dispatch}) {

  return (
    <div className='new-post' style={{backgroundColor:"bisque", textAlign: 'center'}}>
      <div>
        {post.toggle?<h3>{post.name}</h3>:<h3>The Content is hidden</h3>}
      </div>
      <button onClick={()=>dispatch({type:ActionType.TOGGLE, payload:{id:post.id}})}>Toggle</button>
    </div>
  )
}

export default Additems