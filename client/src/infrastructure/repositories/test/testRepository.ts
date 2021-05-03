import { TestDTO } from 'infrastructure/dto/TestDTO'
import { http } from 'infrastructure/lib'

const testRepository = {
  setTest: async (data: { test: 'ok' }) => {
    const result = await http.post<TestDTO>('test', data)
    return result.data
  }
}

export default testRepository
