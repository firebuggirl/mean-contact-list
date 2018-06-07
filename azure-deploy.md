## Steps to get started

https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-app

  - install Azure CLI:

     https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-macos?view=azure-cli-latest



## Deploy to Azure from Docker Image

  * First:

      - change callbackURL in `src/app/auth/auth0-variables.ts`
        + whitelist Azure URL via `Auth0` UI

      - re-run `ng-build` using node -v 8.9

      - re-build Docker image:

          ` docker-compose build `

          ` docker-compose up `

      - change MongoDb connection string to `process.env.MONGODB_URI` in `routes/api.js`


### Create and use Azure Container Registry

https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-acr


  - Create an Azure Container Registry instance

  - Tag a container image for your Azure container registry

  - Upload the image to your registry


  - Create Azure container registry:

        - Before you create your container registry, you `need a resource group` to deploy it to. A resource group is a logical collection into which all Azure resources are deployed and managed.

        - Create free account + resource group

        ` az login `

        ` az group create --name myResourceGroup --location eastus `


        - create an Azure container registry with the `az acr create` command.

        - name must be unique within Azure, and contain 5-50 alphanumeric characters. Replace <acrName> with a unique name for your registry:


        ` az acr create --resource-group myResourceGroup --name <acrName> --sku Basic --admin-enabled true `


        ie.,...

            ` az acr create --resource-group myResourceGroup --name juliettetfirstacr --sku Basic --admin-enabled true `


            ` az acr login --name <acrName> `

            ie.,...


            ` az acr login --name juliettetfirstacr `

            - Tag container image

                - First, get the full `login server name` for your Azure container registry

                    ` az acr show --name <acrName> --query loginServer --output table `


                    ie.,   

                    ` az acr show --name juliettetfirstacr --query loginServer --output table `


                    - returns: ` juliettetfirstacr.azurecr.io `


            ` docker images `

            ` docker tag aci-tutorial-app <acrLoginServer>/aci-tutorial-app:v1 `

            ie.,...


            `  docker tag meanangularcontactlist juliettetfirstacr.azurecr.io/meanangularcontactlist:v1 `


            ` docker images `

            - Push image to Azure Container Registry


              ` docker push <acrLoginServer>/aci-tutorial-app:v1 `

              ie.,...


                ` docker push juliettetfirstacr.azurecr.io/meanangularcontactlist:v1 `


              - List images in Azure Container Registry

              ` az acr repository list --name <acrName> --output table `

              ie.,...

              ` az acr repository list --name juliettetfirstacr --output table `


              - To see the tags for a specific image, use the az acr repository show-tags command

                  ` az acr repository show-tags --name <acrName> --repository meanangularcontactlist --output table `


### Deploy a container to Azure Container Instances


  - Deploy the container from Azure Container Registry to Azure Container Instances

  - View the running application in the browser

  - Display the container's logs


      - Get registry credentials:


          - When you deploy an image that's hosted in a private container registry like the one created in the second tutorial, you must supply the registry's credentials.

          - get the full name of the container registry login server

          ` az acr show --name <acrName> --query loginServer `

          ie.,

          ` az acr show --name juliettetfirstacr --query loginServer `

          - returns: ` juliettetfirstacr.azurecr.io `

          -  get the container registry password:

          ` az acr credential show --name <acrName> --query "passwords[0].value" `

            ie.,
          ` az acr credential show --name juliettetfirstacr --query "passwords[0].value" `

            - returns long password...


          * Deploy container


            ` az container create --resource-group myResourceGroup --name aci-tutorial-app --image <acrLoginServer>/aci-tutorial-app:v1 --cpu 1 --memory 1 --registry-login-server <acrLoginServer> --registry-username <acrName> --registry-password <acrPassword> --dns-name-label aci-demo --ports 80 `

            ie., ...


                - The `--dns-name-label` value must be `unique within the Azure region` you create the container instance. Modify the value in the preceding command if you receive a DNS name label error message when you execute the command.




                  ` az container create --resource-group myResourceGroup --name meanangularcontactlist --image juliettetfirstacr.azurecr.io/meanangularcontactlist:v1 --cpu 1 --memory 1 --registry-login-server juliettetfirstacr.azurecr.io --registry-username juliettetfirstacr --registry-password OdFRSpeCqKQb=9tsFYZlxR4Mct0P139L --dns-name-label aci-demo-juliettet --ports 80 `

        -  Verify Deployment status:


          ` az container show --resource-group myResourceGroup --name meanangularcontactlist --query instanceView.state `


         -  display the container's fully qualified domain name (FQDN) with the az container show command:



          `  az container show --resource-group myResourceGroup --name meanangularcontactlist --query ipAddress.fqdn `


          - Run this in browser:

            ` aci-demo-juliettet.eastus.azurecontainer.io `



        - view the log output of the container:



              ` az container logs --resource-group myResourceGroup --name meanangularcontactlist `



        - Clean up resources:


            - deletes the container registry you created, as well as the running container, and all related resources:

              ` az group delete --name myResourceGroup `


### Todo:

    - re-deploy with `https`
