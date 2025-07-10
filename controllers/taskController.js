import Task from '../models/Task.js'

export const createTask = async (req, res) =>{

    try{
        const task = new Task(
            {
              userId: req.user.id ,
              ...req.body,
            });
            const savedTask =  await task.save();
            res.status(201).json(savedTask);

    }catch(err){
        res.status(500).json({message: err.message})
    };
}

export const getTask = async (req, res) =>{
    try{
        const tasks = await Task.find({userId: req.user.id});
    res.status(200).json(tasks)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

export const updateTask = async (req,res) =>{
    try {
        const task = await Task.findOneAndUpdate(
          { _id: req.params.id, userId: req.user.id },
          req.body,
          { new: true }
        );
        if (!task) return res.status(404).json({ message: 'Task successfully updated' });
        res.json(task);
      }
      catch(err){
        res.status(500).json({message: err.message})
    }
};

export const deleteTask = async(req,res) =>{

    try {
        const task = await Task.findOneAndDelete(
          { _id: req.params.id, userId: req.user.id },
          req.body,
          
        );
        if (!task) return res.status(404).json({ message: 'Task successfully deleted' });
        res.json(task);
      }
      catch(err){
        res.status(500).json({message: err.message})
    }

}