import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUpvoteState } from './useUpvoteState';

describe('useUpvoteState', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('should initialize with default state if no stored state exists', () => {
        const { result } = renderHook(() => useUpvoteState());
        
        expect(result.current.lists).toEqual([
            { id: 1, votes: [{ id: 1, selected: false }] }
        ]);
    });

    it('should toggle vote selection when toggleVote is called', () => {
        const { result } = renderHook(() => useUpvoteState());
        
        expect(result.current.lists[0].votes[0].selected).toBe(false);
        
        act(() => {
            result.current.toggleVote(1, 1);
        });

        expect(result.current.lists[0].votes[0].selected).toBe(true);
        
        act(() => {
            result.current.toggleVote(1, 1);
        });
        
        expect(result.current.lists[0].votes[0].selected).toBe(false);
    });

    it('should add new vote to existing list when addVoteToList is called', () => {
        const { result } = renderHook(() => useUpvoteState());
        const initialLength = result.current.lists[0].votes.length;

        act(() => {
            result.current.addVoteToList(1);
        });

        expect(result.current.lists[0].votes).toHaveLength(initialLength + 1);
        expect(result.current.lists[0].votes[1]).toEqual({
            id: 2,
            selected: false
        });
    });

    it('should add new list when addNewList is called', () => {
        const { result } = renderHook(() => useUpvoteState());
        const initialLength = result.current.lists.length;

        act(() => {
            result.current.addNewList();
        });

        expect(result.current.lists).toHaveLength(initialLength + 1);
        expect(result.current.lists[1]).toEqual({
            id: 2,
            votes: [{ id: 1, selected: false }]
        });
    });
});