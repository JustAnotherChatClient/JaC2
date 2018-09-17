# Create the Virtual Env
virtualenv venv

# Activate the Virtual Env
. bin/activate

# Install tensorflow
pip install tensorflow

# Run the sample of training the Tensorflow
python Tensorflow/MNIST-Text.py

# Show the visual of the AI
tensorboard --logdir=Tensorflow/logs

# site to pull up the data
http://localhost:6006/