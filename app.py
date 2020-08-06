from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
import sys
import tensorflow as tf
import keras
import numpy as np
import pandas as pd
from numpy import array
from keras import Sequential
from keras.utils import CustomObjectScope
from keras.initializers import glorot_uniform
from keras.layers import GaussianNoise,Dense,LSTM,Bidirectional,Input
from keras.layers.core import Activation,Dropout,Dense
from keras.optimizers import SGD,Adam
from keras.utils import np_utils
from keras.constraints import max_norm
import keras.losses
#import tensorflow.losses
from keras import backend as K
from tensorflow.keras.models import load_model
########################################## 

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Classifier", 
		  description = "Predict results using a trained model")

name_space = app.namespace('prediction', description='Prediction APIs')


#keras.losses.custom_loss = FocalLoss
#custom_objects={'FocalLoss': FocalLoss()}

model = app.model('Prediction params', 
				  {'select1': fields.Integer(required = False, 
				  							description="Select 1", 
    					  				 	help="Select 1 cannot be blank"),
				  'select2': fields.Integer(required = False, 
				  							description="Select 2", 
    					  				 	help="Select 2 cannot be blank"),
				  'select3': fields.Integer(required = False, 
				  							description="Select 3", 
    					  				 	help="Select 3 cannot be blank"),
				   'select4': fields.Integer(required = False, 
				  							description="Select 4", 
    					  				 	help="Select 4 cannot be blank"),						   
											   
					'select5': fields.Integer(required = False, 
				  							description="Select 5", 
    					  				 	help="Select 5 cannot be blank"),
											   
					'select6': fields.Integer(required = False, 
				  							description="Select 6", 
    					  				 	help="Select 6 cannot be blank"),
					
					'select11': fields.Integer(required = False, 
				  							description="Select 11", 
    					  				 	help="Select 1 cannot be blank"),
				  'select21': fields.Integer(required = False, 
				  							description="Select 21", 
    					  				 	help="Select 2 cannot be blank"),
				  'select31': fields.Integer(required = False, 
				  							description="Select 31", 
    					  				 	help="Select 3 cannot be blank"),
				   'select41': fields.Integer(required = False, 
				  							description="Select 41", 
    					  				 	help="Select 4 cannot be blank"),						   
											   
					'select51': fields.Integer(required = False, 
				  							description="Select 51", 
    					  				 	help="Select 5 cannot be blank"),
											   
					'select61': fields.Integer(required = False, 
				  							description="Select 61", 
    					  				 	help="Select 6 cannot be blank"),
											   
					'select12': fields.Integer(required = False, 
				  							description="Select 12", 
    					  				 	help="Select 1 cannot be blank"),
				  'select22': fields.Float(required = False, 
				  							description="Select 22", 
    					  				 	help="Select 2 cannot be blank"),
				  'select32': fields.Integer(required = False, 
				  							description="Select 32", 
    					  				 	help="Select 3 cannot be blank"),
				   'select42': fields.Integer(required = False, 
				  							description="Select 42", 
    					  				 	help="Select 4 cannot be blank"),						   
											   
					'select52': fields.Integer(required = False, 
				  							description="Select 52", 
    					  				 	help="Select 5 cannot be blank"),
											   
					'select62': fields.Integer(required = False, 
				  							description="Select 62", 
    					  				 	help="Select 6 cannot be blank"),
											   
											   
					'select13': fields.Integer(required = False, 
				  							description="Select 13", 
    					  				 	help="Select 1 cannot be blank"),
				  'select23': fields.Integer(required = False, 
				  							description="Select 23", 
    					  				 	help="Select 2 cannot be blank"),
				  'select33': fields.Integer(required = False, 
				  							description="Select 33", 
    					  				 	help="Select 3 cannot be blank"),
				   'select43': fields.Integer(required = False, 
				  							description="Select 43", 
    					  				 	help="Select 4 cannot be blank"),						   
											   
					'select53': fields.Integer(required = False, 
				  							description="Select 53", 
    					  				 	help="Select 5 cannot be blank"),
											   
					'select63': fields.Integer(required = False, 
				  							description="Select 63", 
    					  				 	help="Select 6 cannot be blank"),
											   
											   
					'select14': fields.Integer(required = False, 
				  							description="Select 14", 
    					  				 	help="Select 1 cannot be blank"),
				  'select24': fields.Integer(required = False, 
				  							description="Select 24", 
    					  				 	help="Select 2 cannot be blank"),
				  'select34': fields.Integer(required = False, 
				  							description="Select 34", 
    					  				 	help="Select 3 cannot be blank"),
				   'select44': fields.Integer(required = False, 
				  							description="Select 44", 
    					  				 	help="Select 4 cannot be blank"),						   
											   
					'select54': fields.Integer(required = False, 
				  							description="Select 54", 
    					  				 	help="Select 5 cannot be blank"),
											   
					'select64': fields.Integer(required = False, 
				  							description="Select 64", 
    					  				 	help="Select 6 cannot be blank") })

classifier =load_model('Final_model.h5',compile=False) # loading LSTM model

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData =request.json
			data = [int(val) for val in formData.values()]
			#data=int(data)
			data=np.array(data).reshape(1,5,6) # reshaping into 3d input for LSTM
			probs= classifier.predict(data)
			predictions= np.argmax(probs, axis=1)
			types = { 0:'L1-1', 1:'L1-2',2:'L1-3',3:'L1-4',4:'L1-5',5:'L1-6',6:'L2-1',7:'L2-10',8:'L2-2',9:'L2-3',
			         10:'L2-4',11:'L2-5',12:'L2-6',13:'L2-7',14:'L2-8',15:'L2-9',16:'L3-1',17:'L3-2',18:'L3-3',19:'L3-4',20:'L3-5',21:'L3-6',22:'No Label'}
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "Predicted Label: "+ types[predictions[0]]
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})