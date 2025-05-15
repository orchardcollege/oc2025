
const List = () => {
  return (
    <ul>
        <h1>How to run a full project: follow the steps</h1>
        <h2>all of this must be created in a file .bat = start-project.bat for example</h2>
        <h3>you can find the paths in windows search and then copy path/route</h3>
        <h4>find the program path and copy the .exe's name</h4>
        <li>start cmd.exe /k = means that another command will be run "cd C:\Program Files\mongoDB\Server\5.0\bin && mongod.exe --dbpath C:/data5/db" = the apth where mongodb is located</li>
        <li>start cmd.exe /k "cd C:\wamp64\www\api-rest-node = yourProjectPath && npm start"</li>
        <li>start cmd.exe /k "cd C: = you can find the path and paste it here && npm run dev"</li>
        <li>start C:\yourFilePathGoesHere</li>
        <li>Finally: double click to .bat file and all programs should open</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  )
}

export default List