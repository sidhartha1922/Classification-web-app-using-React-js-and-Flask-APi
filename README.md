# Wellness measure Classifier- Built with React frontend and Flask backend

<b>Wellness measures Classifier using LSTM networks with custom focal loss function</b>
<p>
This model takes wellness measures such as sleepQuality,appetite,muscle condition etc. and classifies into a group of pre-defined categories that the model trained on. 
Nature of the dataset: Highly Imbalanced, Discrete data</p>

![alt text](https://github.com/sidhartha1922/Classification-web-app-using-React-js-and-Flask-APi/blob/master/ui1.JPG?raw=true)

# Project Setup Instructions

## Prerequisites
Ensure you have the following installed:
- **Python 3**  
- **Node.js**  
- **Yarn**  

---

## Setting up the Project

### UI Setup

1. Navigate to the `ui` folder:  
   ```bash
   cd ui
   ```
2. Install dependencies:  
   ```bash
   yarn install
   ```
   *(You can also use `npm install` if Yarn is unavailable.)*  

3. Install the `serve` package globally (only required once):  
   ```bash
   npm install -g serve
   ```
4. Build the project:  
   ```bash
   npm run build
   ```
5. Serve the React webpage:  
   ```bash
   serve -s build -l 3000
   ```

The React webpage will now be available at `http://localhost:3000`.

---

### Backend Setup

1. Navigate to the `backend` folder:  
   ```bash
   cd backend
   ```
2. Install the required Python dependencies:  
   ```bash
   pip install -r requirements.txt
   ```
   *(This step may take some time.)*  

3. Set the Flask application environment variable:  
   ```bash
   set FLASK_APP=app
   ```

4. Start the Flask backend server:  
   ```bash
   flask run
   ```

---

## Accessing the Application

- **Frontend:**  
  Open your browser and visit `http://localhost:3000`.  

- **Backend:**  
  The Flask API server will be running on `http://127.0.0.1:5000` by default.

---

## Notes

- The above instructions are valid for Windows and may chnage based on OS. Use the appropriate commands for your operating system.
 
