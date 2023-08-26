var rootFolder = {
  name: "Local Disk C",
  subfolders: [
      {
          name: "PerfLogs",
          subfolders: []
      },
      {
          name: "Program Files",
          subfolders: [
              {
                  name: "Common Files",
                  subfolders: [
                      {
                          name: "Microsoft Shared",
                          subfolders: []
                      },
                      {
                          name: "Services",
                          subfolders: []
                      },
                      {
                          name: "SpeechEngines",
                          subfolders: []
                      },
                      {
                          name: "System",
                          subfolders: []
                      }
                  ]
              },
              {
                  name: "DVD Maker",
                  subfolders: [
                      {
                          name: "en-US",
                          subfolders: []
                      },
                      {
                          name: "Shared",
                          subfolders: []
                      }
                  ]
              },
              {
                  name: "Internet Explorer",
                  subfolders: [
                      {
                          name: "en-US",
                          subfolders: []
                      },
                      {
                          name: "SIGNUP",
                          subfolders: []
                      }
                  ]
              },
              {
                  name: "Microsoft Office",
                  subfolders: [
                      {
                          name: "Office12",
                          subfolders: [
                              {
                                  name: "1033",
                                  subfolders: []
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
};

function listFolders(folder, indent = 0) {
  console.log(" ".repeat(indent) + folder.name); // Print the current folder's name
  
  // Iterate through subfolders and call the function recursively
  for (const subfolder of folder.subfolders) {
      listFolders(subfolder, indent + 2); // Increase the indentation for subfolders
  }
}

listFolders(rootFolder);
