import { GenezioDeploy } from "@genezio/types";

/**
 * This class represents a hello world server that can be deployed on genezio infrastructure
 * using "genezio deploy" command or tested locally using "genezio local".
 */
@GenezioDeploy()
export class HelloWorldService {
  constructor(server) {
    console.log("Constructor called!")
    console.log(process.env)
  }

  /**
   * Method that returns a "Hello world" message.
   */
  helloWorld() {
    console.log("Hello world request received!")

    return "Hello world!";
  }

  /**
   * Method that returns a personalized "Hello world" message.
   */
  hello(name, from) {
    console.log(`Hello world request received with name ${name} from ${from}!`)

    return `Hello, ${name}, from ${from}!`
  }
}
