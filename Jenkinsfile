@Library('shared-library') _   

def pipelineToRun = pipelineToChoose(env)       
                               
echo """                       
Pipeline Running: ${pipelineToRun}                      
"""       

"${pipelineToRun}"()