
import { testRepository } from 'infrastructure/repositories'

const testService = {
  setTest: async (data: { test: 'ok' }): Promise<string> => {
    return await testRepository.setTest(data)
  }
}

export default testService
