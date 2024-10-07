const express=require('express');
const Blog=require('../models/Blog');
const router = express.Router();

router.post('/create', async(req,res)=>{
    try{
        const{title,content,author}=req.body;
        const newBlog= new Blog({title,content,author});
        await newBlog.save();
        res.status(201).json(newBlog);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
    });
    router.get('/',async(req,res)=>{
        try{
            const blogs=await Blog.find().sort({createdAt:-1});
            res.json(blogs);
        }
        catch(err){
            res.status(500).json({message:err.message});
        }
    });

    router.get('/:id', async (req, res) => {
        try {
          const blog = await Blog.findById(req.params.id);
          if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
          res.json(blog);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });
      
      // Delete a blog post
      router.delete('/:id', async (req, res) => {
        try {
          const blog = await Blog.findById(req.params.id);
          if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
          await blog.remove();
          res.json({ message: 'Blog deleted' });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });
      
      module.exports = router;