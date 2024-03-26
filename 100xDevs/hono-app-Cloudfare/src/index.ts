import { Hono } from 'hono'

const app = new Hono()

async function authMiddleare(c:any , next:any){
  if(c.request.header("Authorization")){
    await next()
  }else{
    return c.text("You don't have access");
  }
}
app.get('/', authMiddleare, async (c) => {
  const body=await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))
  return c.text('Hello Hono!')
})

export default app
